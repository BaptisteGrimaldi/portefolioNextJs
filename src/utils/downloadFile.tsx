
export function downloadFile(file: string) {
    const fileName = file;
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName.split('/').pop()!;
    link.click();
}