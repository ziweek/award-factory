package ziweek.awardFactory.domain.account.dto

import ziweek.awardFactory.domain.account.entity.Account

data class UpdateAccountReqDto(
    val name: String?,
    val email: String?,
    val encodedPassword: String?
) {
    fun toEntity(): Account {
        return Account(
            name = this.name ?: throw IllegalArgumentException(),
            email = this.email ?: throw IllegalArgumentException(),
            encodedPassword = this.encodedPassword ?: throw IllegalArgumentException()
        )
    }
}