package ziweek.awardFactory

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cache.annotation.EnableCaching
import org.springframework.data.jpa.repository.config.EnableJpaAuditing

@EnableCaching
@EnableJpaAuditing
@SpringBootApplication
class AwardFactoryApplication

fun main(args: Array<String>) {
	runApplication<AwardFactoryApplication>(*args)
}
