'use client';

import { useState } from 'react';
import { Trash } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Button } from '../ui/button';
import toast from 'react-hot-toast';

interface DeleteProps {
  item: string;
  id: string;
}

const Delete = ({ item, id }: DeleteProps) => {
  // const Delete: React.FC<DeleteProps> = ({ item, id }) => {
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    try {
      setLoading(true);
      const itemType = item === 'product' ? 'products' : 'collections';
      const res = await fetch(`/api/${itemType}/${id}`, {
        // const res = await fetch(`/api/collections/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setLoading(false);
        // window.location.href = '/collections';
        window.location.href = `/${itemType}`;
        toast.success(`${item} deleted`);
      }
    } catch (err) {
      console.log(err);
      toast.error('Something went wrong! Please try again.');
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className="bg-orange-1 text-white">
          <Trash className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-white text-grey-1">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-orange-1">
            Are you absolutely sure?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure? This action will permanently delete your {item}.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-orange-1 text-white"
            onClick={onDelete}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Delete;
