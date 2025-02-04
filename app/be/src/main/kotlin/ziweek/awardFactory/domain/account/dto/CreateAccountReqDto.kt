package ziweek.awardFactory.domain.account.dto

import ziweek.awardFactory.domain.account.entity.Account
import ziweek.awardFactory.domain.award.entity.Award

data class CreateAccountReqDto(
    val name: String,
    val email: String,
    val encodedPassword: String,
    val awards: List<Award>
) {
    fun toEntity(): Account {
        return Account(
            name = this.name,
            email = this.email,
            encodedPassword = this.encodedPassword,
            awards = this.awards
        )
    }
}