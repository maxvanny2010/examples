"use client"

type ErrorType = {
    error: Error,
    reset: () => void
}
export default function ErrorPage({error, reset}: ErrorType) {
    return (
        <div>
            <h1>Mistake!</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again!</button>
        </div>
    )
}