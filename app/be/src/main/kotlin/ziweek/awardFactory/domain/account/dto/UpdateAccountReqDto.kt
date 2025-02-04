package ziweek.awardFactory.domain.account.dto

import ziweek.awardFactory.domain.award.entity.Award

data class UpdateAccountReqDto(
    val name: String,
    val email: String,
    val encodedPassword: String,
    val awards: List<Award>
)