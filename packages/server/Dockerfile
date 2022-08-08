FROM maven:3-jdk-8

WORKDIR /app/server

ARG API_REST_PORT

COPY ./.mvn/ ./mvnw ./mvnw.cmd ./pom.xml ./src/ ./

RUN mvn clean package -Dmaven.test.skip -Dmaven.main.skip -Dspring-boot.repackage.skip && rm -r ./target/

FROM openjdk:8-jre

VOLUME /tmp

COPY ./target/ecommerce-0.0.1-SNAPSHOT.jar ./app.jar

CMD [ "java", "-jar", "app.jar" ]