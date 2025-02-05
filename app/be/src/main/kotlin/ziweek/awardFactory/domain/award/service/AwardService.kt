package ziweek.awardFactory.domain.award.service

import org.springframework.cache.annotation.Cacheable
import org.springframework.stereotype.Service
import ziweek.awardFactory.domain.account.dto.UpdateAccountReqDto
import ziweek.awardFactory.domain.account.repository.AccountRepository
import ziweek.awardFactory.domain.account.service.AccountService
import ziweek.awardFactory.domain.award.dto.CreateAwardDto
import ziweek.awardFactory.domain.award.dto.UpdateAwardDto
import ziweek.awardFactory.domain.award.entity.Award
import ziweek.awardFactory.domain.award.repository.AwardRepository

@Service
class AwardService(
    val awardRepository: AwardRepository,
    val accountService: AccountService
) {

    fun createAward(createAwardDto: CreateAwardDto): Award {
        val award = awardRepository.save(createAwardDto.toEntity())

        val account = accountService.getAccountById("67a26f7bcaeef150ad56a25d")
        val updateAccountReqDto = UpdateAccountReqDto(
            email = account.copy().email,
            name = account.copy().name,
            encodedPassword = account.copy().encodedPassword,
            awards = account.copy().awards.plus(award)
        )
        accountService.updateAccount("67a26f7bcaeef150ad56a25d", updateAccountReqDto)
        
        return award
    }

    fun getAwardById(id: String): Award {
        return awardRepository.findAwardById(id)
    }

    fun getAwardsByEmail(email: String): List<Award> {
        return awardRepository.findAwardsByEmail(email)
    }

    fun updateAward(updateAwardDto: UpdateAwardDto): Award {
        val award = awardRepository.findAwardById(updateAwardDto.id)
        val copy = award.copy(
            id = updateAwardDto.id,
            awardValues = updateAwardDto.awardValues ?: award.awardValues,
            cornerShape = updateAwardDto.cornerShape ?: award.cornerShape,
            title = updateAwardDto.title ?: award.title,
            winner = updateAwardDto.winner ?: award.winner,
            description = updateAwardDto.description ?: award.description,
            publisher = updateAwardDto.publisher ?: award.publisher,
            date = updateAwardDto.date ?: award.date
        )
        return awardRepository.save(copy)
    }

    fun deleteAward(id: String) {
        val award = awardRepository.findAwardById(id)
        val account = accountService.getAccountById(award.accountId)
        val updateAccountReqDto = UpdateAccountReqDto(
            email = account.copy().email,
            name = account.copy().name,
            encodedPassword = account.copy().encodedPassword,
            awards = account.copy().awards.filter { award: Award -> award.id != id }
        )
        accountService.updateAccount(award.accountId, updateAccountReqDto)

        awardRepository.deleteById(id)
    }
}