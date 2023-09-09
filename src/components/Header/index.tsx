
import '../../styles/components/header/header.css'

export default function Header(props: any) {

    return (
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )

}