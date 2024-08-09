export default function Footer() {
  return (
    <footer className="grid h-12 place-items-center border-t">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} luisllaboj. All rights reserved.
      </p>
    </footer>
  );
}
