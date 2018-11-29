
export const NotificationsField = gql`
    fragment NotificationsField on Notifications {
        id
        type
        notifiable_type
        notification_type
        data
        created_at_timestamp
        action_user {
            id
            name
            user_info {
                avatar_small
            }
        }
    }
`;

export const NotificationsQuery = gql`
    query NotificationsQuery ($id: ID, $offset: Int!, $limit: Int!) {
        notifications(id: $id, offset: $offset, limit: $limit) @connection(key: "notifications", filter: ["id"]){
            items {
                ...NotificationsField
            }
            cursor {
                total
                perPage
                currentPage
                hasPages
            }
        }
    }
    ${NotificationsField}
`;