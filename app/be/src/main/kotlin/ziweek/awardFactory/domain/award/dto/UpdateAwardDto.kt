package ziweek.awardFactory.domain.award.dto

data class UpdateAwardDto(
    var id: String,
    var awardValues: String,
    var cornerShape: String,
    var title: String,
    var winner: String,
    var description: String,
    var publisher: String,
    var date: String
)