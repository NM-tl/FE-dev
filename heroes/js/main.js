const API = "https://61c9d37520ac1c0017ed8eac.mockapi.io";

const request = async ({url, method = "GET", data = null, options: obj = {}}) => {

    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
        ...obj,
        body: data ? JSON.stringify(data) : null,
    }

    try {
        const request = await fetch(url, options);

        return request.json();
    } catch (e) {
        console.log(e?.message || e?.response?.data?.message)
    }


}

const apiPost = async (url, data, options) => {
    return request({url, method: 'POST', data, options})
}

const apiGet = async (url, options) => {
    return request({url, options})
}

const apiDelete = async (url, data, options) => {
    return request({url, method: 'DELETE', data, options})
}

const apiPut = async (url, data, options) => {
    return request({url, method: 'PUT', data, options})
}

const createHero = (hero) => {

    return `<tr data-id="${hero?.id}">
                <td>${hero?.name ?? ''}</td>
                <td>${hero?.comics ?? ''}</td>
                <td>
                    <label class="heroFavouriteInput">
                        Favourite: <input type="checkbox" ${hero?.favourite && 'checked'} data-id="${hero?.id}">
                    </label>
                </td>
                <td>
                    <button data-id="${hero?.id}">Delete</button>
                </td>
        </tr>`
}


const viewHeroes = async () => {
    const table = document.querySelector('tbody')

    const heroListModel = await apiGet(`${API}/heroes`)

    if (table) {
        if (Array.isArray(heroListModel)) {
            table.innerHTML = heroListModel.map(createHero).join('')
        }

    }

    return heroListModel
}

const getFormData = (target) => Object.fromEntries(new FormData(target));

const addHero =  (heroListModel) => {

    const cache = heroListModel

    return async() => {
        const form = document.querySelector('form')

        if (form) {
            form.addEventListener('submit', async (event) => {

                event.preventDefault()

                const data = getFormData(event?.target)

                const isContainHero = heroListModel.some(({name}) => name === data?.name)

                if(!isContainHero){
                    const answer = await apiPost(`${API}/heroes`, data)
                    const table = document.querySelector('tbody')

                    if(table && answer){
                        cache.push(answer)

                        const hero = createHero(answer)

                        table.innerHTML += hero
                    }
                }else {
                    console.log(`This hero ${data?.name} is contain in list`)
                }

            })
        }
    }
}

const actionsHero = () => {
    const table = document.querySelector('table')

    if (table) {
        table.addEventListener('click', async (event) => {
            const target = event?.target


            if(event?.target?.tagName === 'BUTTON'){
                const answer = await apiDelete(`${API}/heroes/${target?.dataset?.id}`)


                if (answer) {
                    const deletedTableTr = table.querySelector(`tr[data-id="${answer?.id}"]`)

                    if (deletedTableTr) {
                        deletedTableTr.remove()
                    }
                }
            }

            if(event?.target?.tagName === 'INPUT'){
                await apiPut(`${API}/heroes/${target?.dataset?.id}`, {favourite: event?.target?.checked})
            }


        })
    }
}


document.addEventListener('DOMContentLoaded', async () => {
    const heroListModel =  await viewHeroes()

    await addHero(heroListModel)()

    await actionsHero()
})