
export const Input = (props) => {
    let input = (
        <input
            placeholder={props.placeholder}
            type={props.type}
            {...props.register} />
    );
    return (
        <label>
            <div>
                {props.label}{' '}
                <span className='error-message'>{props.error?.message}</span>
            </div>
            {input}
        </label>
    );
};

