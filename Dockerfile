FROM adoptopenjdk:11-jdk-hotspot as builder
ADD . /code/
RUN \
    cd /code/ && \
    rm -Rf build && \
    chmod +x /code/gradlew && \
    ./gradlew bootJar -PnodeInstall -Pprod -Pheroku && \
    mv /code/build/libs/*.jar /

FROM adoptopenjdk:11-jre-hotspot
ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    JHIPSTER_SLEEP=0
CMD echo "The application will start in ${JHIPSTER_SLEEP}s..." && \
    sleep ${JHIPSTER_SLEEP} && \
    java -Djava.security.egd=file:/dev/./urandom -jar /acco-tech*.jar
EXPOSE 8080
COPY --from=builder /*.jar .
