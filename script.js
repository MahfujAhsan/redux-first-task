// Action Identifier
const INCREMENT = "increment"
const DECREMENT = "decrement"
const ADD_COUNTER = "add"
const RESET_COUNTER = "reset"
const ERASE_COUNTER = "erase_counter"

// Action Creators
const increment = (value, id) => {
    return {
        type: INCREMENT,
        payload: {
            value: value,
            id: id
        }
    };
};
const decrement = (value, id) => {
    return {
        type: DECREMENT,
        payload: {
            value: value,
            id: id
        }
    };
};
const add_counter = () => {
    return {
        type: ADD_COUNTER
    };
};

const reset_counter = () => {
    return {
        type: RESET_COUNTER
    };
};

const erase_counter = () => {
    return {
        type: ERASE_COUNTER
    };
};

// Initial State
const initialState = [{
    id: 1,
    value: 0
}];

// Create Reducer Function
function counterReducer(state = initialState, action) {
    const stateValues = state.map(stateValues => {
        return stateValues;
    });
    // Conditional Logics
    if (action.type === INCREMENT) {
        const counter = stateValues.filter(data => {
            return data.id === action.payload.id;
        });
        counter[0].value = counter[0].value + action.payload.value;
        return stateValues;
    }
    else if (action.type === DECREMENT) {
        const counter = stateValues.filter(data => {
            return data.id === action.payload.id;
        });
        counter[0].value = counter[0].value - action.payload.value;
        return stateValues;
    }
    else if (action.type === ADD_COUNTER) {
        const randomN = parseInt(Math.random() * 10) + 1;
        const newCounter = document.createElement("div");
        newCounter.innerHTML = `<div
        class="p-4 mt-4 h-auto space-y-5 bg-white rounded shadow">
            <div class="flex justify-between space-x-3">
                <button onclick="store.dispatch(increment(${randomN},${(stateValues.length) + 1}))" class="bg-indigo-400 hover:bg-red-400 hover:scale-90 duration-200 text-white px-3 py-2 rounded shadow">
                    Increment
                </button>
                <div id="counter${(stateValues.length) + 1}" class="text-2xl font-bold text-[#CE0000]">0</div>
                <button onclick="store.dispatch(decrement(${randomN},${(stateValues.length) + 1}))" class="bg-red-400 hover:bg-indigo-400 hover:scale-90 duration-200 text-white px-3 py-2 rounded shadow">
                    Decrement
                </button>
            </div>
        </div>`
        document.getElementById("countersContainer").appendChild(newCounter)
        const data = {
            id: (stateValues.length) + 1,
            value: 0
        };
        stateValues.push(data);
        return stateValues;
    }
    else if (action.type === RESET_COUNTER) {
        stateValues.forEach(data => {
            data.value = 0;
        });
        return stateValues;
    }
    else if (action.type === ERASE_COUNTER) {
        document.getElementById("countersContainer").innerHTML = "";
    }
    else {
        return state;
    }
}
// Click Handlers
document.getElementById("addCounter").addEventListener("click", () => {
    store.dispatch(add_counter())
})

document.getElementById("reset").addEventListener("click", () => {
    store.dispatch(reset_counter())
})

document.getElementById("erase").addEventListener("click", () => {
    store.dispatch(erase_counter())
})

// Creating Store & Rendering
const store = Redux.createStore(counterReducer);
const render = () => {
    const state = store.getState();
    state.forEach(count => {
        document.getElementById(`counter${count.id}`).innerText = count.value
    })
}
// Appears on UI
store.subscribe(render);