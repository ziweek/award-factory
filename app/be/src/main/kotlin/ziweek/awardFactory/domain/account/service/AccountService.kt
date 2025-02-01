package ziweek.awardFactory.domain.account.service

import org.springframework.stereotype.Service
import ziweek.awardFactory.domain.account.dto.CreateAccountReqDto
import ziweek.awardFactory.domain.account.dto.UpdateAccountReqDto
import ziweek.awardFactory.domain.account.entity.Account
import ziweek.awardFactory.domain.account.repository.AccountRepository

@Service
class AccountService(
    val accountRepository: AccountRepository
) {

    fun createAccount(createAccountReqDto: CreateAccountReqDto): Account {
        return accountRepository.save(createAccountReqDto.toEntity())
    }

    fun getAccountByEmail(email: String): Account {
        return accountRepository.findAccountByEmail(email)
    }

    fun updateAccount(updateAccountReqDto: UpdateAccountReqDto): Account {
        return accountRepository.findById()
    }

    fun deleteAccount()

}