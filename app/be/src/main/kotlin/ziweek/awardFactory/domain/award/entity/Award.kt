package ziweek.awardFactory.domain.award.entity

import jakarta.persistence.GeneratedValue
import jakarta.persistence.GenerationType
import jakarta.persistence.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document
data class Award (
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: String? = null,
    val awardValues: String,
    val cornerShape: String,
    val title: String,
    val winner: String,
    val description: String,
    val publisher: String,
    val date: String
)