package ziweek.awardFactory.domain.award.repository

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import ziweek.awardFactory.domain.award.entity.Award

interface AwardRepository : MongoRepository<Award, String> {
    fun findAwardById(id: String): Award

    @Query("{'account.email': ?0}")
    fun findAwardsByEmail(email: String): List<Award>

}