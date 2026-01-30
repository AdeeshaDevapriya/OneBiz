import { gql } from '@apollo/client';

export const ADD_STUDENT = gql`
  mutation AddStudent($id: Int!, $name: String!, $age: Int!, $city: String!) {
    addStudent(id: $id, name: $name, age: $age, city: $city) {
      id
      name
      city
    }
  }
`;