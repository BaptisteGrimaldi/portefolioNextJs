import { render, fireEvent, screen } from '@testing-library/react';
import ContenuPopUp from '@/components/popUp/ContenuPopUp';

describe('Service Component - email validation', () => {
    it('validates emails correctly', async () => {
        render(<ContenuPopUp />);

        // Test invalid email without @
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'baptiste' } });
        fireEvent.click(screen.getByText('Je veux recevoir la newsletter'));
        expect(screen.getByText('Veuillez remplir le champ ci dessus.')).toBeInTheDocument();

        // Test invalid email with @ but no domain
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'baptiste@' } });
        fireEvent.click(screen.getByText('Je veux recevoir la newsletter'));
        expect(screen.getByText('Veuillez remplir le champ ci dessus.')).toBeInTheDocument();

        // Test invalid email with @ and domain but no extension
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'baptiste@gmail' } });
        fireEvent.click(screen.getByText('Je veux recevoir la newsletter'));
        expect(screen.getByText('Veuillez remplir le champ ci dessus.')).toBeInTheDocument();
    });

    it('displays success message for gmail.com', async () => {
        render(<ContenuPopUp />);

        // Test valid email
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'baptiste@gmail.com' } });
        fireEvent.click(screen.getByText('Je veux recevoir la newsletter'));
        expect(screen.getByText('Vous êtes inscrit à la newsletter')).toBeInTheDocument();

        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'baptiste@test.com' } });
        fireEvent.click(screen.getByText('Je veux recevoir la newsletter'));
        expect(screen.getByText('Vous êtes inscrit à la newsletter')).toBeInTheDocument();
    });
});
