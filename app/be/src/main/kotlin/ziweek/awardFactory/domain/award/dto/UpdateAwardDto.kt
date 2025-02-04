package ziweek.awardFactory.domain.award.dto

data class UpdateAwardDto(
    val id: String,
    val awardValues: String?,
    val cornerShape: String?,
    val title: String?,
    val winner: String?,
    val description: String?,
    val publisher: String?,
    val date: String?
)