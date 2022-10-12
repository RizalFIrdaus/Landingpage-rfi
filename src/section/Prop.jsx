
const Prop = (props) => {
    const { nama, profesi } = props
    return (
        <div className='flex justify-center items-center my-6'>
            <div className="avatar mx-5">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" className='object-contain' />
                </div>
            </div>
            <div className="flex flex-col text-left">
                <p className='text-normal'>{nama}</p>
                <p className='font-light'>{profesi}</p>
            </div>
        </div>
    )
}
export default Prop;