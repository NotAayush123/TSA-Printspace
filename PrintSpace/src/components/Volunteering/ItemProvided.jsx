import { NumberInput } from '@mantine/core'

const ItemProvided = (props) => {
     return (
    <div >
        <h1 className='text-2xl font-semibold text-white flex items-center justify-center mt-3'><NumberInput defaultValue={1} className='mx-3' disabled label="Everyone automatically gets one!"
/> <p className='mt-9'>x {props.title}</p></h1>
        
    </div>
  )
}

export default ItemProvided