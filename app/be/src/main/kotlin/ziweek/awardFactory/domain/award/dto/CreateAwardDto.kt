package ziweek.awardFactory.domain.award.dto

import ziweek.awardFactory.domain.account.entity.Account
import ziweek.awardFactory.domain.award.entity.Award

data class CreateAwardDto(
    var awardValues: String,
    var cornerShape: String,
    var title: String,
    var winner: String,
    var description: String,
    var publisher: String,
    var date: String
) {
    fun toEntity(): Award {
        return Award(
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