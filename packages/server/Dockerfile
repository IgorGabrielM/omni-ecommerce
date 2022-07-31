FROM adoptopenjdk:8-jre-hotspot

WORKDIR /app/server

ADD target/ecommerce-0.0.1-SNAPSHOT.jar ./server.jar

EXPOSE ${API_REST_PORT}

CMD ["java", "-j", "server.jar"]