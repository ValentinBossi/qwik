import { Link, useLocation } from '@builder.io/qwik-city';
import { Slot, component$ } from '@builder.io/qwik';

import { BundleIcon } from '~/components/icons/bundle';
import { DashboardIcon } from '~/components/icons/dashboard';
import { EdgeIcon } from '~/components/icons/edge';
import { EditIcon } from '~/components/icons/edit';
import { ErrorIcon } from '~/components/icons/error';
import Layout from '~/components/layout';
import { ManifestIcon } from '~/components/icons/manifest';
import { RoutesIcon } from '~/components/icons/routes';
import { SlowIcon } from '~/components/icons/slow';
import { SymbolIcon } from '~/components/icons/symbol';

export default component$(() => {
  const location = useLocation();
  const path = `/app/${location.params.publicApiKey}/`;

  const NAVIGATION = [
    { path, label: 'Dashboard', icon: <DashboardIcon />, addDividor: true },
    { path: path + 'manifests/', label: 'Manifests', icon: <ManifestIcon /> },
    { path: path + 'routes/', label: 'Routes', icon: <RoutesIcon /> },
    { path: path + 'symbols/', label: 'Symbols', icon: <SymbolIcon /> },
    { path: path + 'symbols/edge/', label: 'Edge', icon: <EdgeIcon /> },
    { path: path + 'symbols/bundles/', label: 'Bundles', icon: <BundleIcon /> },
    { path: path + 'symbols/slow/', label: 'Slow Symbols', icon: <SlowIcon /> },
    {
      path: path + 'errors/',
      label: 'Errors',
      icon: <ErrorIcon />,
      addDividor: true,
    },
    { path: path + 'edit/', label: 'Edit', icon: <EditIcon /> },
  ];

  return (
    <Layout>
      <div class="grid min-h-[calc(100vh-76px)] grid-cols-[240px_1fr]">
        <aside>
          <div class="flex h-full flex-col gap-8 overflow-y-auto bg-white p-8">
            {NAVIGATION.map(({ path, label, icon, addDividor = false }) => (
              <>
                <Link key={path} href={path} class="flex items-center gap-3">
                  {icon}
                  <span>{label}</span>
                </Link>
                {addDividor && <div class="border-t border-t-slate-200"></div>}
              </>
            ))}
          </div>
        </aside>
        <div class="m-8 overflow-y-auto">
          <Slot />
        </div>
      </div>
    </Layout>
  );
});
