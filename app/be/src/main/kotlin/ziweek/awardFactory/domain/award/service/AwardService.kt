package ziweek.awardFactory.domain.award.service

import org.springframework.stereotype.Service
import ziweek.awardFactory.domain.award.dto.CreateAwardDto
import ziweek.awardFactory.domain.award.entity.Award
import ziweek.awardFactory.domain.award.repository.AwardRepository

@Service
class AwardService(
    val awardRepository: AwardRepository
) {

    fun createAward(createAwardDto: CreateAwardDto): Award {
        return awardRepository.save(createAwardDto.toEntity())
    }

    fun getAwardById(id: String): Award {
        val award = awardRepository.findAwardById(id)
        return  award
    }

    fun getAwardsByEmail(email: String): List<Award> {
        val awards = awardRepository.findAwardsByEmail(email)
        return awards
    }
}