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
    var awardValues: String,
    var cornerShape: String,
    var title: String,
    var winner: String,
    var description: String,
    var publisher: String,
    var date: String
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
            date = this.date
        )
    }
}