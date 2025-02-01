package ziweek.awardFactory.domain.award.api

import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import ziweek.awardFactory.domain.award.entity.Award
import ziweek.awardFactory.domain.award.service.AwardService

@Controller
class AwardResolver(
    private val awardService: AwardService
) {

    @QueryMapping
    fun getAwardById(
        @Argument id: String
    ): Award {
        val award = awardService.getAwardById(id)
        return award
    }

    @QueryMapping
    fun getAwardsByEmail(
        @Argument email: String
    ): List<Award> {
        val awards = awardService.getAwardsByEmail(email)
        return awards
    }

}