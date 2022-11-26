export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img
                        className="cellImg"
                        src={params.row.img}
                        alt="avatar"
                    />
                    {params.row.username}
                </div>
            )
        }
    },
    { field: 'age', headerName: 'Age', width: 210 },
    { field: 'email', headerName: 'Email', width: 210 },
    {
        field: 'status',
        headerName: 'Status',
        width: 210,
        renderCell: (params) => {
            return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        }
    },
]

export const userRows = [
    {
        id: 1,
        username: "John Smith",
        img: "https://minio.kinikumuda.id/propert-expo/user-profile/f5675a7072206bc8c4a367fc5beff2a5.jpg",
        status: "active",
        email: "imen@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "John Smith",
        img: "https://minio.kinikumuda.id/propert-expo/user-profile/f5675a7072206bc8c4a367fc5beff2a5.jpg",
        status: "pending",
        email: "imen@gmail.com",
        age: 35,
    },
    {
        id: 3,
        username: "John Smith",
        img: "https://minio.kinikumuda.id/propert-expo/user-profile/f5675a7072206bc8c4a367fc5beff2a5.jpg",
        status: "active",
        email: "imen@gmail.com",
        age: 35,
    },
    {
        id: 4,
        username: "John Smith",
        img: "https://minio.kinikumuda.id/propert-expo/user-profile/f5675a7072206bc8c4a367fc5beff2a5.jpg",
        status: "pending",
        email: "imen@gmail.com",
        age: 35,
    },
    {
        id: 5,
        username: "John Smith",
        img: "https://minio.kinikumuda.id/propert-expo/user-profile/f5675a7072206bc8c4a367fc5beff2a5.jpg",
        status: "pending",
        email: "imen@gmail.com",
        age: 35,
    },
];