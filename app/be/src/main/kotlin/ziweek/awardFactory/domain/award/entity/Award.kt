package ziweek.awardFactory.domain.award.entity

import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import org.springframework.data.mongodb.core.mapping.Document
import ziweek.awardFactory.domain.account.dto.AccountResDto
import ziweek.awardFactory.domain.award.dto.AwardResDto

@Document
data class Award (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: String? = null,
    val awardValues: String,
    val cornerShape: String,
    val title: String,
    val winner: String,
    val description: String,
    val publisher: String,
    val date: String,
    val accountId: String
) {
    fun toResDto(): AwardResDto {
        return AwardResDto(
            id = this.id,
            awardValues = this.awardValues,
            cornerShape = this.cornerShape,
            title = this.title,
            winner = this.winner,
            description = this.description,
            publisher = this.publisher,
            date = this.date,
            accountId = this.accountId
        )
    }
}