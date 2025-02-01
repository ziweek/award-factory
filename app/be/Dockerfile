FROM azul/zulu-openjdk-alpine:17 as builder

COPY build.gradle settings.gradle gradlew ./
COPY ./gradle ./gradle
COPY ./src ./src
RUN chmod +x ./gradlew
RUN ./gradlew clean bootJar

FROM azul/zulu-openjdk-alpine:17-jre
COPY --from=builder /build/libs/*.jar /app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app.jar"]