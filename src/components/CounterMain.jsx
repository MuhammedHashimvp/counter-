import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease, reset } from '../redux/slice'

function CounterMain() {

    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>

            <div className='d-flex justify-content-center align-items-center w-100' style={{ height: '100vh' }}>

                <div className='w-50 border border-light p-3'>
                    <h1 className='text-light text-center'> COUNTER</h1>
                    <h2 className='text-center text-warning'>{count}</h2>
                    <br />
                    <div className='mt-3 d-flex justify-content-between'>
                        <button className='btn btn-success' onClick={() => { dispatch(increase()) }}>Increase</button>
                        <button className='btn btn-danger' onClick={() => { dispatch(reset()) }}>Reset</button>
                        <button className='btn btn-primary' onClick={() => { dispatch(decrease()) }} >Decrease</button>

                    </div>
                </div>


            </div>



        </div>
    )
}

export default CounterMain