export default function Page({ params }: { params: { slug: string } }) {
    return <div>slug Page @@@"{params.slug}</div>
}