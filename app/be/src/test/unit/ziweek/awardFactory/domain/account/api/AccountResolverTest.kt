package ziweek.awardFactory.domain.account.api

import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.graphql.tester.AutoConfigureGraphQlTester
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.graphql.test.tester.GraphQlTester

@SpringBootTest
@AutoConfigureGraphQlTester
class AccountResolverTest {

    @Autowired
    lateinit var graphQlTester: GraphQlTester

    @Test
    @DisplayName("signUpTest")
    fun signUpTest() {
        // Given
        val query = """
            type Query {
                account(id: ID!): Account
            }
        """

        // when
        val response = graphQlTester.document(query).execute()
        println("response = ${response}")

        // then
//        assertEquals(account.name, "alex")
    }
}
