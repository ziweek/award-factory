package ziweek.awardFactory.domain.award.api

import org.springframework.cache.annotation.Cacheable
import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import ziweek.awardFactory.domain.account.dto.UpdateAccountReqDto
import ziweek.awardFactory.domain.account.service.AccountService
import ziweek.awardFactory.domain.award.dto.AwardResDto
import ziweek.awardFactory.domain.award.dto.CreateAwardDto
import ziweek.awardFactory.domain.award.dto.UpdateAwardDto
import ziweek.awardFactory.domain.award.entity.Award
import ziweek.awardFactory.domain.award.service.AwardService

@Controller
class AwardResolver(
    private val awardService: AwardService,
) {

    @MutationMapping
    fun createAward(@Argument(name = "createAwardInput") createAwardDto: CreateAwardDto): AwardResDto {
        return awardService.createAward(createAwardDto).toResDto()
    }


    @QueryMapping
//    @Cacheable(value = ["awards"], key = "#id")
    fun getAwardById(
        @Argument id: String
    ): AwardResDto {
        return awardService.getAwardById(id).toResDto()
    }

    @QueryMapping
    fun getAwardsByEmail(
        @Argument email: String
    ): List<AwardResDto> {
        return awardService.getAwardsByEmail(email).map { award: Award -> award.toResDto() }
    }

    @MutationMapping
    fun updateAward(
        @Argument(name = "updateAwardInput") updateAwardDto: UpdateAwardDto
    ): AwardResDto {
        return awardService.updateAward(updateAwardDto).toResDto()
    }

    @MutationMapping
    fun deleteAward(
        @Argument id: String
    ) {
        awardService.deleteAward(id)
    }
}