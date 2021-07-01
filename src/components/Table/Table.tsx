import "./Table.css";
import Week from "../Week/Week";

const Table = () => {
    return (
        <>
            <tr>
                <th className="time">8:00 - 9:35</th>
                <Week />
            </tr>
            <tr>
                <th className="time">9:45 - 11:20</th>
                <Week />
            </tr>
            <tr>
                <th className="time">11:30 - 13:05</th>
                <Week />
            </tr>
            <tr>
                <th className="time">13:25 - 15:00</th>
                <Week />
            </tr>
            <tr>
                <th className="time">15:10 - 16:45</th>
                <Week />
            </tr>
            <tr>
                <th className="time">16:55 - 18:30</th>
                <Week />
            </tr>
        </>
    );
}

export default Table;