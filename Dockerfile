FROM adoptopenjdk:11-jdk-hotspot as builder
ADD . /code/
RUN \
    apt-get update && \
    apt-get install build-essential -y && \
    apt-get install nodejs -y && \
    cd /code/ && \
    rm -Rf build && \
    chmod +x /code/gradlew && \
    sleep 1 && \
    ./gradlew bootJar -PnodeInstall -Pprod -Pheroku && \
    mv /code/build/libs/*.jar / && \
    apt-get clean && \

FROM adoptopenjdk:11-jre-hotspot
ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    JHIPSTER_SLEEP=0 \
    JAVA_OPTS="-XX:+UseContainerSupport"
CMD echo "The application will start in ${JHIPSTER_SLEEP}s..." && \
    sleep ${JHIPSTER_SLEEP} && \
    java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar /acco-tech*.jar
EXPOSE 8080
COPY --from=builder /*.jar .
