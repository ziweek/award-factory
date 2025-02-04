package ziweek.awardFactory.domain.account.service

import jakarta.persistence.Cacheable
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

    fun getAccountById(id: String): Account {
        return accountRepository.findAccountById(id)
    }

    fun getAccountByEmail(email: String): Account {
        return accountRepository.findAccountByEmail(email)
    }

    fun updateAccount(id: String, updateAccountReqDto: UpdateAccountReqDto): Account {
        val account = accountRepository.findAccountById(id)
        val newAccount = account.copy(
            name = updateAccountReqDto.name ?: account.name,
            email = updateAccountReqDto.email ?: account.email,
            encodedPassword = updateAccountReqDto.encodedPassword ?: account.encodedPassword,
            awards = updateAccountReqDto.awards ?: account.awards
        )
        return accountRepository.save(newAccount)
    }

    fun deleteAccount(id: String) {
        accountRepository.deleteById(id)
    }

}