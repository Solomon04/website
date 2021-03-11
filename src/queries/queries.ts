import {gql} from "graphql-tag";

export const GET_EXPERIENCES = gql`
    query GetObjects {
        getObjects(bucket_slug: "kingsolomon-production", input: {
            limit: 20,
            read_key: "pj8d2VO5oQpqWCS6XC8B12TZgu5k3vUopygMPQ9MXjOBnNNTex",
            type: "experiences"
        }) {
            objects {
                _id
                title
                content
                metadata
            }
        }
    }
`;

export const GET_POSTS = gql`
    query GetObjects {
        getObjects(bucket_slug: "kingsolomon-production", input: {
            limit: 20,
            read_key: "pj8d2VO5oQpqWCS6XC8B12TZgu5k3vUopygMPQ9MXjOBnNNTex",
            type: "posts"
        }) {
            objects {
                _id
                title
                metadata
                slug
            }
        }
    }
`;

export const GET_POST = gql`
    query GetObject {
        getObject(bucket_slug: "kingsolomon-production", input: {
            slug: $slug,
    read_key: "pj8d2VO5oQpqWCS6XC8B12TZgu5k3vUopygMPQ9MXjOBnNNTex"
        }) {
            _id
            title
            content
            metadata
            published_at
        }
    }
`;
