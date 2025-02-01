package ziweek.awardFactory.domain.account.api

import org.springframework.graphql.data.method.annotation.Argument
import org.springframework.graphql.data.method.annotation.MutationMapping
import org.springframework.graphql.data.method.annotation.QueryMapping
import org.springframework.stereotype.Controller
import ziweek.awardFactory.domain.account.dto.AccountResDto
import ziweek.awardFactory.domain.account.dto.CreateAccountReqDto
import ziweek.awardFactory.domain.account.dto.UpdateAccountReqDto
import ziweek.awardFactory.domain.account.entity.Account
import ziweek.awardFactory.domain.account.service.AccountService

@Controller
class AccountResolver(
    private val accountService: AccountService
) {

    @MutationMapping
    fun createAccount(
        @Argument(name = "createAccountInput") createAccountReqDto: CreateAccountReqDto
    ): AccountResDto {
        return accountService.createAccount(createAccountReqDto).toResDto()
    }

    @QueryMapping
    fun getAccountByEmail(
        @Argument email: String
    ): AccountResDto {
        return accountService.getAccountByEmail(email).toResDto()
    }

    @MutationMapping
    fun updateAccount(
        @Argument(name = "updateAccountInput") updateAccountReqDto: UpdateAccountReqDto
    ): AccountResDto {
        return accountService.updateAccount(updateAccountReqDto).toResDto()
    }

    @MutationMapping
    fun deleteAccount(
        @Argument id: String
    ) {
        accountService.deleteAccount(id)
    }

}