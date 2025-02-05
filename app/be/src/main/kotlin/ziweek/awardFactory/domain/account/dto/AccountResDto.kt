package ziweek.awardFactory.domain.account.dto

import ziweek.awardFactory.domain.award.entity.Award
import java.time.LocalDate

data class AccountResDto(
    val id: String?,
    val name: String,
    val email: String,
    val awards: List<Award>
)