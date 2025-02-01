package ziweek.awardFactory.domain.account.dto

data class UpdateAccountReqDto(
    val id: String,
    val name: String?,
    val email: String?,
    val encodedPassword: String?
)