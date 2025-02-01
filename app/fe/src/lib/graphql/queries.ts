import { gql } from '@apollo/client';
import { apolloClient } from './client';
import { UserProfile, Award } from '@/types';

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    getUserProfile {
      id
      name
      email
    }
  }
`;

export const UPDATE_USER_PROFILE = gql`
  mutation UpdateUserProfile($input: UpdateUserProfileInput!) {
    updateUserProfile(input: $input) {
      id
      name
      email
    }
  }
`;

export const GET_USER_AWARDS = gql`
  query GetUserAwards($page: Int!, $limit: Int!) {
    getUserAwards(page: $page, limit: $limit) {
      awards {
        id
        title
        description
      }
      totalPages
      currentPage
    }
  }
`;

export const DELETE_AWARD = gql`
  mutation DeleteAward($id: ID!) {
    deleteAward(id: $id)
  }
`;

export async function getUserProfile(): Promise<UserProfile> {
  const { data } = await apolloClient.query({
    query: GET_USER_PROFILE,
  });
  return data.getUserProfile;
}

export async function updateUserProfile(profile: Partial<UserProfile>): Promise<UserProfile> {
  const { id, name, email } = profile;
  const { data } = await apolloClient.mutate({
    mutation: UPDATE_USER_PROFILE,
    variables: { 
      input: { id, name, email } 
    },
  });
  return data.updateUserProfile;
}

export async function getUserAwards(page: number, limit: number = 6): Promise<{ 
  awards: Award[], 
  totalPages: number, 
  currentPage: number 
}> {
  const { data } = await apolloClient.query({
    query: GET_USER_AWARDS,
    variables: { page, limit },
  });
  return data.getUserAwards;
}

export async function deleteAward(id: string): Promise<boolean> {
  const { data } = await apolloClient.mutate({
    mutation: DELETE_AWARD,
    variables: { id },
  });
  return data.deleteAward;
}
