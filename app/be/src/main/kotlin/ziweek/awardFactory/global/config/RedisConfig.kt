package ziweek.awardFactory.global.config

import org.springframework.beans.factory.annotation.Value
import org.springframework.cache.CacheManager
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.redis.cache.RedisCacheConfiguration
import org.springframework.data.redis.cache.RedisCacheManager
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory
import org.springframework.data.redis.connection.RedisStandaloneConfiguration
import org.springframework.data.redis.core.RedisTemplate
import org.springframework.data.redis.serializer.StringRedisSerializer
import java.time.Duration

@Configuration
class RedisConfig(
    @Value("\${spring.data.redis.host}")
    val host: String,

    @Value("\${spring.data.redis.port}")
    val port: Int
) {
    @Bean
    fun redisConnectionFactory(): LettuceConnectionFactory {
        val redisConfig = RedisStandaloneConfiguration(host, port)
        return LettuceConnectionFactory(redisConfig)
    }

    @Bean
    fun redisTemplate(): RedisTemplate<String, Any> {
        val template = RedisTemplate<String, Any>()
        template.connectionFactory = redisConnectionFactory()
        template.keySerializer = StringRedisSerializer()
        template.valueSerializer = StringRedisSerializer()
        return template
    }

    @Bean
    fun cacheManager(): CacheManager {
        val redisCacheConfiguration = RedisCacheConfiguration
            .defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(1))
        val redisCacheManager = RedisCacheManager
            .RedisCacheManagerBuilder
            .fromConnectionFactory(redisConnectionFactory())
            .cacheDefaults(redisCacheConfiguration)
            .build()
        return redisCacheManager
    }

}