package ziweek.awardFactory.domain.account.dto

import ziweek.awardFactory.domain.account.entity.Account

data class CreateAccountReqDto(
    val name: String,
    val email: String,
    val encodedPassword: String
) {
    fun toEntity(): Account {
        return Account(
            name = this.name,
            email = this.email,
            encodedPassword = this.encodedPassword
        )
    }
}