
// CHANGE MEEEEEEE

let token = '274eff56c8b4016b294852351ccb34c24d47fee840cf8378'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://car-collection-ah.herokuapp.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
        })

        if(!response.ok){
            console.log('Failed to fetch sT from the server')
        }

        return await response.json()
    },
    create: async (data: any = {}) => {
        const response = await fetch(`https://car-collection-ah.herokuapp.com/api/cars`,{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
    },
    body: JSON.stringify(data)
})
if(!response.ok){
    console.log('Failed to Create new Car Data')
}

        return await response.json()

    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://car-collection-ah.herokuapp.com/api/cars`,
        {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
    },

    delete: async (id:string) => {
        const response = await fetch(`https://car-collection-ah.herokuapp.com/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json',
                'x-access-token' : `Bearer ${token}`
            }
        })
    }

}