package ziweek.awardFactory.domain.account.entity

import jakarta.validation.constraints.Email
import org.springframework.data.mongodb.core.mapping.Document
import ziweek.awardFactory.domain.account.dto.AccountResDto
import ziweek.awardFactory.domain.award.entity.Award
import java.time.LocalDate

@Document
data class Account(
    val id: String? = null,

    @Email(message = "This is not valid email",
        regexp = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$")
    val email: String,
    val name: String,
    val encodedPassword: String,
    var awards: List<Award> = emptyList<Award>()
) {
    fun toResDto(): AccountResDto {
        return AccountResDto(
            id = this.id,
            name = this.name,
            email = this.email,
            awards = this.awards
        )
    }
}