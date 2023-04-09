import { gql } from "@apollo/client";

export const GET_PROJECTS = gql`
  query ProjectCollectionQuery($limit: Int, $skip: Int) {
    projectCollection(limit: $limit, skip: $skip) {
      items {
        name
        deadline
      }
      total
    }
  }
`;

export const GET_TASKS = gql`
  query TaskCollectionQuery($limit: Int, $skip: Int) {
    taskCollection(limit: $limit, skip: $skip) {
      items {
        name
      }
      total
    }
  }
`;
