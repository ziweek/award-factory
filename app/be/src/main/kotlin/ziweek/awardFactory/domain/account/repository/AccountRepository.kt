package ziweek.awardFactory.domain.account.repository

import org.springframework.data.mongodb.repository.MongoRepository
import ziweek.awardFactory.domain.account.entity.Account

interface AccountRepository : MongoRepository<Account, String> {

    fun findAccountByEmail(email: String) : Account

    fun findAccountById(id: String) : Account

}