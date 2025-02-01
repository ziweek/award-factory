package ziweek.awardFactory.domain.account.entity

import jakarta.persistence.*
import jakarta.validation.constraints.Email
import org.springframework.data.mongodb.core.mapping.Document
import ziweek.awardFactory.domain.account.dto.AccountResDto
import java.time.LocalDate
import java.time.LocalDateTime

@Document
data class Account(
    var id: String? = null,

    @Email(message = "This is not valid email",
        regexp = "^[\\w!#$%&'*+/=?`{|}~^-]+(?:\\.[\\w!#$%&'*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$")
    val email: String,
    val name: String,
    val encodedPassword: String,
) {
    fun toResDto(): AccountResDto {
        return AccountResDto(
            id = this.id,
            name = this.name,
            email = this.email
        )
    }
}